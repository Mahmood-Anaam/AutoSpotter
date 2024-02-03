const baseURL = "https://slate-gray-mackerel-tam.cyclic.app";

export const loadAvailableFloorSpots = async ({
  floorId,
  startDate,
  endDate,
}) => {
  const params = { floorId, startDate, endDate };
  const Url =
    baseURL + `/fireStore/AvailableFloorSpots?${new URLSearchParams(params)}`;
  let spots = [];
  let errorMsg = null;

  try {
    let response = await fetch(Url, {
      method: "GET",
      header: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    });

    let responseJson = await response.json();

    if (response.status == 200) {
      spots = responseJson.spotsAvailable;
    } else {
      errorMsg = responseJson.errorMsg;
      errorMsg = errorMsg;
    }
    return { spots, errorMsg };
  } catch (error) {
    errorMsg = error.message;
    return { spots, errorMsg };
  }
};

export const BookingSpot = async (BookingInfo) => {
  const Url = baseURL + `/fireStore/BookingSpot`;
  try {
    let response = await fetch(Url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(BookingInfo),
    });

    const { docId, msg } = await response.json();

    return { docId, msg };
  } catch (error) {
    msg = error.message;
    docId = null;
    return { docId, msg };
  }
};
