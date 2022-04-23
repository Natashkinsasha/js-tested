
/**
 * In the below function we have 5 errors and 4 memory leak.
 * Find it, add a comment above the issue you found and a version of code that resolve the issue
 */

// async function getRecords() {
function getRecords() {

    // const records = await DataBase.query("SELECT * FROM myTable");
    var records = await DataBase.query("SELECT * FROM myTable");

    //for(const record of records){
    for(record in records){
        // console.log(JSON.parse(JSON.stringify(record)));
        console.log(record)
    }

    // const otherRecords = await DataBase.query("SELECT * FROM myTable2");
    var otherRecords = DataBase.query("SELECT * FROM myTable2");

    // const allRecords = [...records, ...otherRecords];
    let allRecords = [...records, otherRecords];

    // console.log("Records found: ", JSON.parse(JSON.stringify(allRecords)));
    console.log("Records found: " + allRecords.toString())

}

getRecords();