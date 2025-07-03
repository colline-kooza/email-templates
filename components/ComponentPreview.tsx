"use client";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow as darkTheme } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { oneLight as lightTheme } from "react-syntax-highlighter/dist/cjs/styles/prism";
import {
  Copy,
  Check,
  MonitorSmartphone,
  Tablet,
  Smartphone,
  Download,
  Code,
  Eye,
} from "lucide-react";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { renderToReadableStream } from "react-dom/server";
import { ScriptCopyBtn } from "./magicui/script-copy-btn";

interface ComponentPreviewProps {
  componentName: any;
  title: string;
  description?: string;
  tags?: string[];
  createdDate?: string;
  sourceCode: string;
  isEmailTemplate?: boolean;
}

export default function ComponentPreview({
  componentName,
  title,
  description,
  tags,
  createdDate,
  sourceCode,
  isEmailTemplate = true,
}: ComponentPreviewProps) {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);
  const [activeDevice, setActiveDevice] = useState("desktop");
  const [showCode, setShowCode] = useState(false);
  const [emailHtml, setEmailHtml] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const customCommandMap = {
    npm: "npm install @react-email/components @react-email/tailwind",
    yarn: "yarn add @react-email/components @react-email/tailwind",
    pnpm: "pnpm add @react-email/components @react-email/tailwind",
    bun: "bun add @react-email/components @react-email/tailwind",
  };

  // Dynamically import the component based on componentName
  const DynamicComponent = dynamic(
    () =>
      import(`@/components/emails/${componentName}`).catch(() => {
        console.error(
          `Failed to load component: @/components/emails/${componentName}`
        );
        return () => (
          <div className="p-4 text-red-500">Component failed to load</div>
        );
      }),
    {
      ssr: false,
      loading: () => null,
    }
  );

  useEffect(() => {
    let isMounted = true;

    if (isEmailTemplate && DynamicComponent) {
      setIsLoading(true);

      const renderEmailToHtml = async () => {
        try {
          const stream = await renderToReadableStream(<DynamicComponent />);
          const reader = stream.getReader();
          const chunks = [];

          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            chunks.push(value);
          }

          const result = new TextDecoder().decode(
            new Uint8Array(
              chunks.reduce((acc, chunk) => [...acc, ...chunk], [])
            )
          );

          if (isMounted) {
            setEmailHtml(result);
            setTimeout(() => setIsLoading(false), 30);
          }
        } catch (error) {
          console.error("Error rendering email:", error);
          if (isMounted) {
            setEmailHtml("<div>Error rendering email template</div>");
            setIsLoading(false);
          }
        }
      };

      renderEmailToHtml();
    }

    return () => {
      isMounted = false;
    };
  }, [DynamicComponent, isEmailTemplate, componentName]);

  useEffect(() => {
    if (iframeRef.current && emailHtml && !showCode) {
      const iframe = iframeRef.current;
      const iframeDoc =
        iframe.contentDocument || iframe.contentWindow?.document;

      if (iframeDoc) {
        iframeDoc.open();
        iframeDoc.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Email Preview</title>
              <style>
                body { 
                  margin: 0; 
                  padding: 0; 
                  font-family: sans-serif;
                  height: 100%;
                  overflow: auto;
                }
                .email-container { 
                  width: 100%;
                  margin: 0 auto; 
                  background-color: #ffffff;
                }
                @media (min-width: 600px) {
                  .email-container {
                    max-width: 600px;
                  }
                }
              </style>
            </head>
            <body>
              <div class="email-container">
                ${emailHtml}
              </div>
            </body>
          </html>
        `);
        iframeDoc.close();
      }
    }
  }, [emailHtml, showCode]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(sourceCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  const handleExport = async () => {
    const blob = new Blob([sourceCode], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${componentName}.tsx`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getPreviewDimensions = () => {
    switch (activeDevice) {
      case "desktop":
        return {
          width: "100%",
          height: "600px",
          containerClass: "w-full mx-auto",
        };
      case "tablet":
        return {
          width: "100%",
          maxWidth: "768px",
          height: "500px",
          containerClass: "w-full max-w-md mx-auto",
        };
      case "mobile":
        return {
          width: "100%",
          maxWidth: "375px",
          height: "500px",
          containerClass: "w-full max-w-xs mx-auto",
        };
      default:
        return {
          width: "100%",
          height: "600px",
          containerClass: "w-full mx-auto",
        };
    }
  };
  const installCommand = isEmailTemplate
    ? "npm install @react-email/components @react-email/tailwind"
    : "";

  const dimensions = getPreviewDimensions();
  const handleCopyInstall = async () => {
    try {
      await navigator.clipboard.writeText(installCommand);
      toast.success("Copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy.");
      console.error(err);
    }
  };
  return (
    <div className="container mx-auto max-w-7xl px-2 py-2 md:px-4 md:py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 md:gap-4">
        <div className="lg:col-span-8">
          <Card className="shadow-md border !p-0 ">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <img src="/bg-1.png" alt="Logo" className="w-8 h-8" />
                  <div>
                    <CardTitle className="text-sm md:text-2xl font-bold dark:text-white text-black">
                      {title}
                    </CardTitle>
                    <CardDescription>
                      {isEmailTemplate ? "Email Template" : "UI Component"}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Tabs defaultValue="desktop">
                    <TabsList>
                      <TabsTrigger
                        value="desktop"
                        onClick={() => setActiveDevice("desktop")}
                        className={
                          activeDevice === "desktop"
                            ? "bg-primary text-primary-foreground"
                            : ""
                        }
                      >
                        <MonitorSmartphone className="h-4 w-4" />
                      </TabsTrigger>
                      <TabsTrigger
                        value="tablet"
                        onClick={() => setActiveDevice("tablet")}
                        className={
                          activeDevice === "tablet"
                            ? "bg-primary text-primary-foreground"
                            : ""
                        }
                      >
                        <Tablet className="h-4 w-4" />
                      </TabsTrigger>
                      <TabsTrigger
                        value="mobile"
                        onClick={() => setActiveDevice("mobile")}
                        className={
                          activeDevice === "mobile"
                            ? "bg-primary text-primary-foreground"
                            : ""
                        }
                      >
                        <Smartphone className="h-4 w-4" />
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => setShowCode(!showCode)}
                          className={
                            showCode ? "bg-primary text-primary-foreground" : ""
                          }
                        >
                          {showCode ? (
                            <Eye className="h-4 w-4" />
                          ) : (
                            <Code className="h-4 w-4" />
                          )}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        {showCode ? "Show preview" : "View code"}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-4">
              {showCode ? (
                <div className="relative rounded-sm overflow-hidden">
                  <div className="absolute top-2 right-2 z-10">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={copyToClipboard}
                            className="flex items-center gap-1 bg-background/80 backdrop-blur-sm"
                          >
                            {copied ? (
                              <>
                                <Check className="h-4 w-4" />
                                Copied!
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4" />
                                Copy
                              </>
                            )}
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          {copied ? "Copied!" : "Copy code"}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <SyntaxHighlighter
                    language="tsx"
                    style={theme === "dark" ? darkTheme : lightTheme}
                    showLineNumbers
                    customStyle={{
                      margin: 0,
                      padding: "1rem",
                      borderRadius: "0.5rem",
                      fontSize: "0.875rem",
                      maxHeight: "600px",
                      overflowY: "auto",
                    }}
                  >
                    {sourceCode}
                  </SyntaxHighlighter>
                </div>
              ) : (
                <div
                  className={`flex items-center justify-center md:p-2 h-full`}
                >
                  <div className={dimensions.containerClass}>
                    <div className="rounded-md overflow-hidden shadow-lg bg-gray-100">
                      <div className="py-2 md:px-4 bg-gray-200 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-xs text-gray-600">
                          Email Preview
                        </div>
                        <div></div>
                      </div>

                      <div
                        className="bg-white border-t border-gray-300 relative"
                        style={{ height: dimensions.height }}
                      >
                        {/* {isLoading && (
                          <div className="absolute inset-0 flex items-center justify-center bg-white z-20">
                            <div className="w-10 h-10 border-4 border-gray-200 border-t-primary rounded-full animate-spin"></div>
                          </div>
                        )} */}

                        <iframe
                          ref={iframeRef}
                          className="w-full border-0 h-full"
                          style={{
                            width: dimensions.width,
                            maxWidth: dimensions.maxWidth || "none",
                          }}
                          title="Email Template Preview"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-4">
          <Card className="shadow-md sticky top-20 border-none dark:bg-black">
            <CardHeader>
              <CardTitle>Component Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Description
                  </h3>
                  <p className="mt-1">{description}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {tags?.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Created
                  </h3>
                  <p className="mt-1">{createdDate}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
                    Installations
                  </h3>

                  <ScriptCopyBtn
                    showMultiplePackageOptions={true}
                    codeLanguage="shell"
                    lightTheme="nord"
                    darkTheme="vitesse-dark"
                    commandMap={customCommandMap}
                  />
                </div>

                <div className="pt-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white"
                          onClick={handleExport}
                        >
                          <Download className="h-4 w-4" />
                          Export Component
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Download component file</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
