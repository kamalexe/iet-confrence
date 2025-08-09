export const calculateTimeLeft = (targetDate) => {
    const target = new Date(targetDate); // parse incoming date/time
    const now = new Date();
    const difference = target - now;
  
    if (isNaN(target.getTime())) {
      throw new Error("Invalid date format passed to calculateTimeLeft()");
    }
  
    if (difference <= 0) {
      return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  
    return {
      total: difference,
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };
  