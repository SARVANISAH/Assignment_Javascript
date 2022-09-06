const axios = require("axios");

const fetch_data = async () =>{
    const data = await axios.get(
        " https://think.cs.vt.edu/corgis/datasets/json/airlines/airlines.json"
    );
    // console.log("Actual data length is", data.data);
    return data.data;
};

fetch_data().then((data) => {
    const new_result = data.filter(
        (val) =>{
        console.log("calculated",  val.Statistics.Flights["Cancelled"],
        val.Statistics.Flights["Delayed"],
        val.Statistics.Flights["Diverted"],
        val.Statistics.Flights["On Time"], "given",val.Statistics.Flights["Total"])
        
        return val.Statistics.Flights["Cancelled"] + val.Statistics.Flights["Delayed"] + val.Statistics.Flights["Diverted"] + val.Statistics.Flights["On Time"] === val.Statistics.Flights["Total"]}
    );

    // console.log(new_result);
    console.log(new_result.length);
    // console.log(data.val);
});