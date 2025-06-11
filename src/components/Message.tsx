interface MessageInterface {
  reloading: string;
}
const Message = ({ reloading }: MessageInterface) => {
  return <>{reloading && <p>{reloading}</p>}</>;
};

export default Message;
