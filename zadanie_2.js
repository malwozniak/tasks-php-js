
/*

Podana jest struktura: tablica obiektów z danymi dotyczącymi osoby (nazwa użytkownika, rok
urodzenia, pensja). Napisz funkcję welcomeUsers(array). Funkcja powinna przyjmować
wspomnianą strukturę i dla każdego elementu tablicy wypisywać do konsoli programistycznej łańcuch
znaków zależny od danych danego obiektu:
•  Dla osób z pensją powyżej 15 000: Witaj, prezesie!
•  Dla osób z pensją poniżej 5 000: <nazwa_użytkownika>, szykuj się na podwyżkę!
•  Dla osób z parzystym rokiem urodzenia: Witaj, <nazwa_użytkownika>! W tym roku
kończysz <obliczony_wiek_rocznikowy> lat!
•  Dla osób z nieparzystym rokiem urodzenia: <nazwa_użytkownika>, jesteś zwolniony!
Warunki na wysokość pensji mają być sprawdzane przed warunkami na rok urodzenia.
obliczony_wiek_rocznikowy to różnica pomiędzy bieżącym rokiem, a rokiem urodzenia.

Przykładowa struktura wejściowa i łańcuchy utworzone za jej pomocą:

• Struktura:
```
var usersArr = [
{username: ′Jan Kowalski′, birthYear: 1983, salary: 4200},
{username: ′Anna Nowak′, birthYear: 1994, salary: 7500},
{username: ′Jakub Jakubowski′, birthYear: 1985, salary: 18000},
{username: ′Piotr Kozak′, birthYear: 2000, salary: 4999},
{username: ′Marek Sinica′, birthYear: 1989, salary: 7200},
{username: ′Kamila Wiśniewska′, birthYear: 1972, salary: 6800},
];

```

• Łańcuchy wypisane w konsoli programistycznej dla podanej wyżej struktury:
```
Jan Kowalski, szykuj się na podwyżkę!
Witaj, Anna Nowak! W tym roku kończysz 28 lat!
Witaj, prezesie!
Piotr Kozak, szykuj się na podwyżkę!
Marek Sinica, jesteś zwolniony!
Witaj, Kamila Wiśniewska! W tym roku kończysz 50 lat!
```
*/

var usersArr = [
    {username: 'Jan Kowalski', birthYear: 1983, salary: 4200},
    {username: 'Anna Nowak', birthYear: 1994, salary: 7500},
    {username: 'Jakub Jakubowski', birthYear: 1985, salary: 18000},
    {username: 'Piotr Kozak', birthYear: 2000, salary: 4999},
    {username: 'Marek Sinica', birthYear: 1989, salary: 7200},
    {username: 'Kamila Wiśniewska', birthYear: 1972, salary: 6800},
    ];
 
    function welcomeUsers(array)
    {
               
        let name = array.map(a => a.username);
        let salary = array.map(a => a.salary);
        let birth = array.map(a => a.birthYear);
        const numberDate = new Date().getFullYear();
           
        for( let key in salary )
        {
            if ( salary[key] > 15000 )
            {
        
                console.log('Witaj, prezesie!');

            }
            else if ( salary[key] < 5000 )
            {

                console.log(`${name[key]}, szykuj się na podwyżkę!`);

            }
            else
            {
                var obliczony_wiek_rocznikowy =  numberDate - birth[key];
                const result = ( birth[key] %2 == 0) ?  `Witaj, ${name[key]}! W tym roku kończysz ${obliczony_wiek_rocznikowy} lat!` : `${name[key]}! Jesteś zwolniony!`;
                console.log(result);           

            }
        }
    }

    welcomeUsers(usersArr);