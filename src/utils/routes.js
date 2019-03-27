const host = ['api', 'v1'];

// Get List Of Tasks
// GET /channels

// Get List of Messages for  channelId
// GET /api/v1/channels/:channelId/messages

// Create new channel
// POST /channels
// data: { attributes: { name: "myChannelName" } } }


// Create new message
// POST /channels/:channelId/messages
// { data: { attributes: { message } } }


export default {
  channelsUrl: () => [...host, 'channels'].join('/'),
  messagesUrl: id => [...host, 'channels', id, 'messages'].join('/'),
};
