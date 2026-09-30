/*
Enter your query here.
*/
select 
ceiling(
    (SELECT avg(Salary) FROM EMPLOYEES) 
    - 
    (SELECT sum(REPLACE(Salary,'0','') ) / count(ID) FROM EMPLOYEES)
    )