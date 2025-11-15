export function ChatKitPanel() {
  return (
    <iframe
      src={`https://chatkit.studio/playground?workflowId=${WORKFLOW_ID}&theme=custom&primary=%2344aa00&background=%23f5f5f5&foreground=%232d7000&radius=pill&greeting=Готовы%20помочь%20сейчас%20по%20любому%20мебельному%20вопросу&placeholder=Напишите%20свой%20вопрос`}
      className="w-full h-full border-none"
      allow="microphone"
    />
  );
}
