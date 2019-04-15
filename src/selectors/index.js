import { createSelector } from 'reselect';

export const getMessages = state => state.messages;
export const messagesSelector = createSelector(
  getMessages,
  messages => Object.values(messages),
);
export const currentChannelId = state => state.currentChannelId;
export const currentMessagesSelector = createSelector(
  messagesSelector,
  currentChannelId,
  (messages, currentId) => messages.filter(el => el.channelId === currentId),
);

export const getChannels = state => state.channels;
export const channelsSelector = createSelector(
  getChannels,
  channels => Object.values(channels),
);
