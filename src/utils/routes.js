const host = ['api', 'v1'];

// Get List Of Tasks
// GET /channels

// Create new message
// POST /channels/:channelId/messages
// { data: { attributes: { message } } }


export default {
  channelsUrl: () => [...host, 'channels'].join('/'),
  messagesUrl: id => [...host, 'channels', id, 'messages'].join('/'),
};
