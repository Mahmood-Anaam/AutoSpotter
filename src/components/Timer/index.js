/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { formatTimer } from "../../utilities/HelperFunctions";

export default function Timer(props) {
  const [seconds, setSeconds] = useState(
    props.descending ? props.maxSeconds : 0
  );

  let interval;
  useEffect(() => {
    interval = setInterval(() => {
      setSeconds((prevSeconds) =>
        props.descending ? prevSeconds - 1 : prevSeconds + 1
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  useEffect(() => {
    const deadlineVal = props.descending ? 0 : props.maxSeconds;
    if (seconds === deadlineVal) {
      clearInterval(interval);
      props.onDeadlineHandler();
    }
  }, [seconds]);

  return <Text>{formatTimer(seconds)}</Text>;
}
