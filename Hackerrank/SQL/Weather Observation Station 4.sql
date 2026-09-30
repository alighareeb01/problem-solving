/*
Enter your query here.
*/
SELECT (select count(CITY) from STATION) - (select  count(DISTINCT CITY) from STATION)