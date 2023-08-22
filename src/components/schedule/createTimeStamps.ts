export function createTimeStamps(date: string) {
  const startTime = new Date(date).setHours(9, 0, 0, 0);
  const endTime = new Date(date).setHours(21, 0, 0, 0);

  const timeStamps: number[] = [];
  let currentTime = startTime;

  while (currentTime <= endTime) {
    timeStamps.push(currentTime / 1000);
    currentTime += 60 * 60 * 1000;
  }

  const timeReceptions = timeStamps.map((time) => {
    const timeStampDate = new Date(time * 1000);
    const hours = timeStampDate.getHours().toString().padStart(2, '0');
    const minutes = timeStampDate.getMinutes().toString().padStart(2, '0');

    return { timeStamp: time, timeString: `${hours}:${minutes}` };
  });

  return timeReceptions;
}
