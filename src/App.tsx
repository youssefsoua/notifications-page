import { useState } from "react";
import NotificationCard, {
  INotificationCardProps,
} from "./components/NotificationCard";

const notifications: INotificationCardProps[] = [
  {
    image: "./avatar-mark-webber.webp",
    name: "Mark Webber",
    text: "reacted to your recent post",
    isRead: false,
    date: "1m ago",
    post: "My first tournament today!",
  },
  {
    image: "./avatar-angela-gray.webp",
    name: "Angela Gray",
    text: "followed you",
    isRead: false,
    date: "5m ago",
  },
  {
    image: "./avatar-jacob-thompson.webp",
    name: "Jacob Thompson",
    text: "has joined your group",
    isRead: false,
    date: "1 day ago",
    group: "Chess Club",
  },
  {
    image: "./avatar-rizky-hasanuddin.webp",
    name: "Rizky Hasanuddin",
    text: "sent you a private message",
    isRead: true,
    date: "5 days ago",
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
  },
  {
    image: "./avatar-kimberly-smith.webp",
    name: "Kimberly Smith",
    text: "commented on your picture",
    isRead: true,
    date: "1 week ago",
    postImage: "./image-chess.webp",
  },
  {
    image: "./avatar-nathan-peterson.webp",
    name: "Nathan Peterson",
    text: "reacted to your recent post",
    isRead: true,
    date: "2 weeks ago",
    post: "5 end-game strategies to increase your win rate",
  },
  {
    image: "./avatar-anna-kim.webp",
    name: "Anna Kim",
    text: "left the group",
    isRead: true,
    date: "2 weeks ago",
    group: "Chess Club",
  },
];

const App = () => {
  const [notificationsList, setNotificationsList] = useState(notifications);

  const markAsRead = () => {
    setNotificationsList((state) =>
      state.map((notification) => ({ ...notification, isRead: true }))
    );
  };

  return (
    <section className="max-w-[730px] bg-white p-4 md:rounded-2xl md:px-8 md:pb-0 md:pt-6 md:shadow-2xl">
      <header className="flex justify-between pb-6 pt-2">
        <h1 className="font-extrabold text-very-dark-blue md:text-2xl">
          Notifications
          <span className="ml-2.5 rounded-md bg-blue px-2.5 py-1 text-white md:py-0.5 md:text-lg">
            {
              notificationsList.filter((notifications) => !notifications.isRead)
                .length
            }
          </span>
        </h1>
        <button
          className="bg-transparent text-sm text-grayish-blue hover:text-blue md:text-lg"
          onClick={markAsRead}
        >
          Mark all as read
        </button>
      </header>
      <section className="py-3 md:py-0">
        {notificationsList.map((notification, index) => (
          <NotificationCard {...notification} key={index} />
        ))}
      </section>
    </section>
  );
};

export default App;
