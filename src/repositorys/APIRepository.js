const baseURL = "https://slate-gray-mackerel-tam.cyclic.app";

export const loadAvailableFloorSpots = async ({
    floorId,
    startDate,
    endDate,
}) => {

    const params={floorId,startDate,endDate}
    const Url = baseURL + `/fireStore/AvailableFloorSpots?${new URLSearchParams(params)}`;
    let spots = [];
    let errorMsg = null;

    try {
        let response = await fetch(Url, {
            method: "GET",
            header:{
                'Accept':'application/json',
                'Content-type' : 'application/json'
              },    
        });
        
        let responseJson = await response.json();
        console.log(".......................responseJson.......................");
        console.log(responseJson);

        if (response.status == 200) {
            spots = responseJson.spotsAvailable;

        } else {
            errorMsg  = responseJson.errorMsg;
            errorMsg = errorMsg;
        }
        return { spots, errorMsg };

    } catch (error) {
        errorMsg = error.message;
        return { spots, errorMsg };
    }
};
