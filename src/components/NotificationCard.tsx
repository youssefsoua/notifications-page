export interface INotificationCardProps {
  image: string;
  name: string;
  text: string;
  isRead: boolean;
  date: string;
  message?: string;
  post?: string;
  group?: string;
  postImage?: string;
}

const NotificationCard = (props: INotificationCardProps) => {
  const { date, image, isRead, name, text, message, group, post, postImage } =
    props;
  return (
    <article
      className={`mb-3 flex flex-row justify-between rounded-lg p-4 ${
        isRead ? "" : "bg-very-light-grayish-blue"
      } md:mb-2`}
    >
      <section className="flex">
        <img
          src={image}
          alt="Profile Image"
          className="h-10 w-10 cursor-pointer rounded-full md:h-11 md:w-11"
        />
        <section className="flex flex-col pl-3 text-sm md:text-base">
          <p className="text-dark-grayish-blue">
            <a className="cursor-pointer font-extrabold text-very-dark-blue hover:text-blue">
              {name}
            </a>
            &nbsp;
            {text}
            {(post || group) && (
              <a
                className={`cursor-pointer font-extrabold hover:text-blue ${
                  group ? "text-blue" : ""
                }`}
              >
                &nbsp;{post || group}
              </a>
            )}
            {!isRead && (
              <span className="ml-1 inline-block h-2 w-2 rounded-full bg-red" />
            )}
          </p>
          <p className="text-grayish-blue">{date}</p>
          {message && (
            <div className="mt-3 cursor-pointer rounded-md border border-light-grayish-blue-2 p-4 hover:bg-light-grayish-blue-1">
              <p className="text-dark-grayish-blue">{message}</p>
            </div>
          )}
        </section>
      </section>

      {postImage && (
        <img
          src={postImage}
          alt="Post Image"
          className="h-10 w-10 cursor-pointer rounded-lg hover:border-2 hover:border-light-grayish-blue-2"
        />
      )}
    </article>
  );
};

export default NotificationCard;
