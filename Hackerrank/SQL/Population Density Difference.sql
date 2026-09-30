select 
(select max(POPULATION) FROM CITY) - (select min(POPULATION) FROM CITY)