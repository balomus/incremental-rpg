import { Modal } from "antd";

export function countDown(seconds: number, title: string, content: string) {
  let secondsToGo = seconds;
  const modal = Modal.success({
    title,
    content: (
      <>
        <p>{content}</p>
        <p>{`This modal will be destroyed after ${seconds} second(s).`}</p>
      </>
    ),
  });
  const timer = setInterval(() => {
    secondsToGo -= 1;
    modal.update({
      content: (
        <>
          <p>{content}</p>
          <p>{`This modal will be destroyed after ${secondsToGo} second(s).`}</p>
        </>
      ),
    });
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();
  }, secondsToGo * 1000);
}
