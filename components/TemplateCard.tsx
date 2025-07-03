export default function TemplateCard({ template }:any) {
    return (
      <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 dark:border-gray-800">
        <div className="p-5">
          {template.image && (
            <div className="mb-4">
              <img src={template.image} alt={template.title} className="w-full h-auto rounded" />
            </div>
          )}
          
          {template.features && (
            <div className="mb-4">
              <h3 className="font-bold mb-2 text-sm">Advanced routing</h3>
              <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-2">
                {template.features.map((feature:any, idx:any) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          
          {template.reasons && (
            <div className="mb-4">
              <h3 className="text-sm font-medium mb-2">3 reasons people use Miro</h3>
              <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-2">
                {template.reasons.map((reason:any, idx:any) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-6 h-6 flex-shrink-0 bg-yellow-100 dark:bg-yellow-800 rounded mr-2"></div>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {template.integrations && (
            <div className="mb-4">
              <h3 className="text-sm font-medium mb-2">{template.integrations}</h3>
              <div className="grid grid-cols-4 gap-2 mt-4">
                {Array(8).fill(0).map((_, idx) => (
                  <div key={idx} className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded"></div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="px-5 py-3 border-t border-gray-100 dark:border-gray-800">
          <h2 className="text-sm font-medium text-gray-900 dark:text-white truncate">{template.title}</h2>
          <p className="text-xs text-gray-500 dark:text-gray-400">{template.company}</p>
        </div>
      </div>
    );
  }