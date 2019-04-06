export default (data) => {
  const { channels, messages } = data;
  return (
    {
      ...data,
      channels: channels.reduce((acc, el) => ({ ...acc, [el.id]: el }), {}),
      messages: messages.reduce((acc, el) => ({ ...acc, [el.id]: el }), {}),
    }
  );
};
