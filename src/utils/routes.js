const host = ['api', 'v1'];

// Get List Of Tasks
// GET /channels

// Get List of Messages for channelId
// GET /channels/:channelId/messages

// Create new channel
// POST /channels
// data: { attributes: { name: "myChannelName" } } }

// Create new message
// POST /channels/:channelId/messages
// { data: { attributes: { message } } }

// Delete channel by id
// DELETE /channels/:id

// Update channel by id
// PATCH /channels/:id
// { data: { attributes: { name } } }

export default {
  channelsUrl: () => [...host, 'channels'].join('/'),
  channelUrl: id => [...host, 'channels', id].join('/'),
  messagesUrl: id => [...host, 'channels', id, 'messages'].join('/'),
};
