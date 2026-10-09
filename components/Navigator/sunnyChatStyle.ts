/**
 * How Sunny's chat looks, in one place.
 *
 * Sunny lives in three codebases (the Hub, the Resource Directory and the embeddable widget on healthmatters.clinic) and each had its
 * own idea of a bubble, a chip and a button, so the same assistant looked like three different ones. This is the spec all three
 * follow. If you change it here, change it in the other two (sunny-harper/src/SunnyChat.tsx and Resource-Directory/components/ChatWidget.tsx):
 *
 *   Messages and options share one shape: a rounded rectangle with a small squared corner on the speaker's side, like a text message.
 *   Options are not pills and not bold. They are the same shape and size as a message, so a row of choices reads as part of the chat.
 *   The launcher, the panel, the message box, the send button and the options carry the site's thin black line, 1px #0f0f0f, the same
 *   hairline every HMC button carries. Messages themselves have no outline.
 */
export const HAIRLINE = 'border border-[#0f0f0f]';

/** The shape of a message from Sunny, and of an option. The squared corner is bottom left. */
export const SHAPE_SUNNY = 'rounded-[16px] rounded-bl-[4px]';
/** The shape of a message from the person. The squared corner is bottom right. */
export const SHAPE_PERSON = 'rounded-[16px] rounded-br-[4px]';

export const BUBBLE_TEXT = 'px-4 py-2.5 text-sm leading-relaxed font-normal';
