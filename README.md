# Zadania rekrutacyjne (Junior Web Developer PHP/JS)

## Zadanie 1 (PHP)

Klawiatury starych telefonów komórkowych były wyłącznie numeryczne. Aby napisać za ich pomocą
tekst należało naciskać dany klawisz numeryczny odpowiednią ilość razy, na przykład „ULA” zapisywało
się jako 885552 (dwa naciśnięcia klawisza 8, trzy naciśnięcia klawisza 5, jedno naciśnięcia klawisza 2).
Stwórz klasę PhoneKeyboardConverter zawierającą metody:

1. convertToNumeric, umożliwiającą tłumaczenie łańcucha znaków na ciąg numeryczny
zgodny z klawiaturą telefonu, kolejne „litery” oddzielone powinny być przecinkiem,
2. convertToString , umożliwiającą tłumaczenie ciągu numerycznego zgodnego z klawiaturą
telefonu (gdzie kolejne „litery” oddzielone będą przecinkiem) na tekst.
Metody powinny przyjmować jako wymagany parametr wejściowy ciąg znaków i zwracać
przetłumaczony ciąg. Klasa może zawierać dowolne inne zmienne/metody, które zostały uznane za
niezbędne bądź pomocne przy wykonaniu zadania.

Przykładowe dane wejściowe i oczekiwane rezultaty:
Metoda Dane wejściowe Zwrócone przez metodę
convertToNumeric Ela nie ma kota 33,555,2,0,66,444,33,0,6,2,0,55,666,8,2
convertToString 5,2,22,555,33,222,9999,66,444,55 jablecznik

## Zadanie 2 (JavaScript)

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
