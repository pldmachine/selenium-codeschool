#Wprowadzenie

1. JavaScript jest lekkim językiem. Tzn. nie wymaga dużo pamięci, ma dosyć prostą składnie.
    - najczęściej używany podczas budowania stron internetowych
    - wielo-platformowy
    - zorientowany obiektowo
    - wykonywany po stronie klienta (przęglądarka), jest to tradycyjne podejscie np pozwalające na dodanie dynamicznych wizualnych efektów. Wiele popularnych bibliotek bazuje na JavaScript, np jQuery
    - wykonywany po stronie serwera (nodeJs), stosunkowo nowe rozwiazanie dzięki któremu powstały nowoczesne frameworki Angular, React itp, a także takie rozwiazania jak protractor

2. Jest jedną z trzech postawowych technologii wykorzystywanych przy budowie aplikacji internetowych
    - HTML dostarcza kontent
    - CSS zapewnia wygląd
    - JavaScript zapewnia od dynamicznych efektów po całą logikę aplikacji poprzez programowanie

3. Demo. Pierwsze uruchomienie JavaScript
    - JavaScript w przeglądarce. Mieszanie warstw
    - JavaScript w przeglądarce. Separacja warstw
    - Zdarzenie OnClick, Alert, console.log, manipulacja DOM
    - NodeJS

> https://www.w3schools.com/jsref/dom_obj_document.asp (getElementById, title, url)
> https://www.w3schools.com/jsref/dom_obj_style.asp (style.color, style.fontSize)
> https://www.w3schools.com/jsref/dom_obj_all.asp (innerText)
> https://www.w3schools.com/jsref/dom_obj_event.asp (click, mouseover)
> https://www.w3schools.com/jsref/obj_window.asp

Zadanie: Spróbowac napisać kólko i krzyżyk
Rozwiązanie:

#JavaScript - Podstawy - Variables and Types

> W Javascript możemy komentowąc kod na dwa sposoby. 1. // (one line) 2. /* */ (multiline)

W JavaScript mamy 5 (w ostatnim ECMAScript 7) typów prymitywnych (primitive types czyli typy podstawowe)
Javascript posiada typowanie dynamiczne (dynamic typing). Oznacza to że typ wykrywany jest w trakcie wykonywania kodu. Powoduje to że do tej samej zmiennej możemy przypisać wartości różnego typu tym samym zmieniająć jej typ.
Takie rozwiazanie ma swoje plusy i minusy ( przez pomyłke możemy przypisać wartość złego typu)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
    - Boolean (true, false)
    - NULL (non-existent)
    - Undefined (typ który nie ma jescze wartosci)
        `
        var job, isMarried;
        console.log(job)
        `
    - Number (decimals, integers)
    - String (text)
    - Symbol +
    - Object +
Deklarowanie typu string przez '' lub "". Downolnosc ale rekomendowane '' przez narzedzia typu linting;

Różnica między var a let. (Demo: 1.0)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let


## Type Coercion
Czyli dynamiczne konwertowanie typów. Coś co w c# nie istnieje, tam trzeba jawnie przekonwertować (np. Convert.ToInt32 lub x.ToString())

`
    var name = 'John';
    var age = 26
    var isMarried = true
    console.log(name + ' ' + age + ' ' + isMarried);
    console.log(age + age);
`

Użyteczny przypadek:
boolean == integer
23 == "23"

> Różnica pomiedzy == i ===

## Operators
Pierwszenstwo operatorów:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Operatory/Pierwsze%C5%84stwo_operator%C3%B3w

## Conditional statements
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
if, if else, else if, switch


Falsy values:
 - false
 - undefined
 - null
 - 0
 - NaN
 - empty string

 Short-circuit evaluation
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Logical

Conditional (ternary) operator

> condition ? expr1 : expr2 

ZADANIE:
Gra dla dwóch zawodników. Wygrywa ten kto uzyska wieksza wartość według wzoru: wzrost + 5 razy wiek zawodnika.
1. Poprosić o imiona zawodników (prompt)
2. Poproś o wzrost i rok urodzenia (nie wiek)
3. Wyswietlić komunikat kto wygrał. W komunikacie zawrzeć wynik oraz wiek (nie rok urodzenia). Nie zapomnieć że może być remis.
eksta: Dodać trzeciego zawodnika


# functions
 Po co sa funkcje ? DRY

 ## function statements && function expression
 `
 function someFunc(param){

 }

 var someFun = function(param){

 }
 `
Expresion produkuje wartość


Zadanie:
1. Poprosić o imię (prompt)
2. Dostarczyc funkcje która będzie obliczać wiek na podstawie roku urodzenia
3. Dostarczyc funkcje która bedzie obliczać lata do emerytury (dla uproszczenia 65). Funkcja ma wykorzystywać funkcje z punktu 1. Komuniakt powinien zawierać: Imię, wiek, jeśli jest na emeryturze to komunikat twierdzący, jeśli nie to wyswietlić lata.

# Arrays
Demo 2.0