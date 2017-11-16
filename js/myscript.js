//ctrl + / - komentarz liniowy
//to jest komentarz liniowy

/*ctrl + shift + / - komentarz blokowy/*/

console.log('123');

//zmienne
var liczba = 10; /*to jest zmienna globalna*/
var Liczba = 15;
var napis = 'Ala ma kota \n '

//dodawanie number do stringa
console.log(liczba + napis);
console.log(napis + liczba);

console.log('123');
console.log(liczba);
console.log(Liczba);
wpiszWKonsoli(); /*wywołanie funkcji*/
//^odwołania do var w console.log piszemy bez ''; jak dajemy w cudzysłowie to mamy stringa
//w konsoli - jak widzimy na czarno - to tekst; jak liczba - to zmienna

//funkcje - reużywalne bloki kodu, tworzymy za pomoca slowa kluczowego function
function wpiszWKonsoli() {
    console.log('123');
}
//w nawiasach klamrowych - to się nazywa "ciało funkcji"

var nowaFunkcja = function() {
    console.log('456');
}
//to jest ^^^ funkcja anonimowa, czyli funkcja która nie ma nazwy
nowaFunkcja();

//funkcja która ma 2 parametry i wypisuje w konsoli wynik dodawania tych dwóch argumentów

function dodawanie(liczba1, liczba2) {
    console.log(liczba1 + liczba2);
}

dodawanie(39, 80);

//funkcja która ma 2 parametry i zwraca w konsoli wynik dodawania tych dwóch argumentów
//jak w poleceniu jest 'zwraca' to znaczy, że musimy użyć return

function odejmowanie(liczba3, liczba4) {
    var roznica = liczba4 - liczba3; /*to jest zmienna lokalna*/
    return roznica;
    console.log('jestem po return i mnie nie pokazuje, bo jestem po return ;)')
}

console.log(odejmowanie(3, 16));
//działa, ale nie pokazuje, bo nie ma console.loga ;) 
//jak zdefiniujemy sobie zmenne globalne to w dowolnym momencie kodu możemy się do nich odwołać

var zmienna = null;
//null - specjalny typ danych, określa nic. to jest nihilizm
console.log(zmienna);
//przykład na niezdefiniowaną:
//var zmienna;
//console.log(zmienna);

//typ bool
var zmienna2 = true;
console.log(zmienna2);

var tablica = ['Marcin', 'Ania', 'Agnieszka'];
console.log(tablica[0]);
console.log(tablica[2]); /*Agnieszka*/
//przez podanie nazwy i numer indexu, następnie przypisanie wartości
//dodawanie wartości do tablicy
tablica[3] = 'Jan';
console.log(tablica[3]);

tablica.push('Michał'); /*dodaje element na koniec tablicy*/
console.log(tablica[4]);
console.log(tablica);

//pop() - ZAWSZE usuwa ostatni element tablicy
tablica.pop(); /*bez parametrów, bo usuwa ostatni*/
console.log(tablica);

//unshift(wartość, wartość, ...) - wstawia element(y) na początek tablicy
tablica.unshift('Wojtek', 'Kajetan');
console.log(tablica);

//shift() - usuwa pierwszy element tablicy
tablica.shift();
console.log(tablica);

//length - zwraca długość tablicy
console.log(tablica.length);

//join wypisuje elementy tablicy jako string
console.log(tablica.join('+'));

//reverse() - odwraca kolejność elementów tablicy
console.log(tablica.reverse());

//sortuje - ustawia alfabetycznie. Wielkość liter ma znaczenie!
//sortowanie wg wzoru: najpierw znaki specjalne, cyfry, duże litery, małe litery
console.log(tablica.sort());

//split - dzieli string po podanym parametrze i wrzuca je do tablicy
var string = 'Ala ma kota';
var res = string.split ('');/*teraz dostaję wszystkie litery*/
console.log(res);
console.log(res.join(''));
console.log(res.sort().join()); /*najpierw sortowanie, a potem joinowanie; jeśli na odwrót to lipa*/

var osoba = {
    name: 'Marcin',
    height: '180',
    print: function() {console.log(this.name);}
}

console.log(osoba.name + ' ' + osoba.height);
osoba.print(); /*jak wywołujemy funkcję - musi być nawias!!! ()*/

console.log(osoba);
//print: f - jak coś takiego dostaniemy w konsoli, to znaczy, że dana rzecz jest obiekterm

osoba.weight = 70;
console.log(osoba);

osoba.printDetail = function() {
    console.log(this.name + ' ' + this.height + ' ' + this.weight);
}
console.log(osoba);

osoba.printDetail();

//klasy obiektu - szablon dla obiektu
class Osoba {
    constructor(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
    }
    
    wyswietlInfo() {
        console.log('Imię: ' + this.imie + ' ' + 'Nazwisko: ' + this.nazwisko);
    }
}

//jak stworzyć nowy obiekt? jak już mamy coś takiego^

var krystian = new Osoba('Krystian', 'Dziopa');

var marcin = new Osoba('Marcin', 'G');

krystian.wyswietlInfo();
marcin.wyswietlInfo();

//i tak możemy sobie tworzyć za każdym razem nowy obiekt danej klasy

//obiekt wbudowany math 
console.log('PI= ' + Math.PI);

//losowanie liczb 0-1, ale niekoniecznie ten sposób; wpiszesz w google i wyskoczy masę sposobów
var randomNumer = Math.random();
console.log(randomNumer);

//liczba całkowita
var randomNumer = Math.floor(Math.random() * 100) +1;
console.log(randomNumer);
//+1 bo od jedynki zaczynamy, *10 - przedział do 10; żeby liczby nie były dziesiętne
//floor - żeby nie było liczb dziesiętnych

//pow(liczba podnoszona, do potęgi)
console.log(Math.pow(10,2));

console.log(3%2);

var a = 10;
//a = a+10;
a += 10; /*zapis na lewo i powyższy TO TO SAMO*/
console.log(a);

var string1 = '10';
var number1 = 10;

console.log (string1 === number1);
//^^ wypadnie false, bo to różne typy danych
console.log (string1 !== number1);
console.log (string1 != number1);

//operator warunkowy
//(warunek) ? jezeli_prawda : jezeli_nieprawda ;
var ujemna = -10;
var wynik = (ujemna > 0) ? 'Jest większa od 0' : 'Nie jest większa od zera';
console.log(wynik);

//if najprostszej postaci wykonuje się wtedy i tylko wtedy, gdy podany warunek jest spełniony (to znaczy ma wartość true)

if (ujemna < 0) {
    console.log('Ujemna jest mniejsza od 0');
}

//w bloku else instrukcje do wykonania, gdy warunek niespełniony (to znaczy ma wartość false)
if (ujemna < 0) {
    console.log('Ujemna jest mniejsza od 0');
} else {
    console.log('Warunek nie został spełniony! Ujemna jest większa od 0');
}

var dodatnia = 100;
//else if sprawdza czy kolejny podany warunek jest prawdziwy
if (dodatnia < 0) {
    console.log('Dodatnia jest mniejsza od 0');
} else if (dodatnia === 100) {
    console.log('podałeś liczbę 100');
} else {
    console.log ('warunek nie został spełniony')
}

//instrukcja switch
var kolor = 'zielony';

switch (kolor) {
    case 'zielony':
        console.log('podałeś kolor zielony');
        break;
    case 'czerwony':
        console.log('podałeś kolor czerwony');
        break;
    case 'czarny':
        console.log('podałeś kolor czarny');
        break;
    default:
        console.log('jesteś daltonistą');
}

// Marcin pisze kod z ifami - switchów raczej unika, ale komu co pasuje bardziej

//wypisanie wszystkich elementów tablicy
//i - iterator

for(var i=0; i<tablica.length; i++) {
    console.log(tablica[i]);
}

// jak chcę wypisać index: numer indexu, wartość: wartość
for(var i=0; i<tablica.length; i++) {
    console.log('Index: ' + i + ', ' + 'wartość: '+ tablica[i]);
}

// dla pętli forEach nie musimy dawać iteratora ale podajemy wartość
// najpierw zawsze element, potem index
// wypisanie elementów tablicy za pomocą forEach

tablica.forEach(function(element, index) {
     console.log('Element:' + element + ' ' + 'o indeksie: ' + index);           
})

//pętle while 
var it = 0;
while (it < 10) {
    console.log(it);
/*warunek który jest caly czas spełniony - pętla, która się nie kończy*/
    it++;
}

//do..while
var iter = 20;
do {
    console.log(iter);
    iter++;
} while (iter < 10);
//^^^ wyszedł w console logu mimo, że nieprawda. Jak źle wpiszemy, to wykona się, mimo, że nie chcemy żeby się wykonała... Trzeba być ostrożnym

// w poniższym kodzie dzięki zastosowaniu komendy brak - zatrzymuje się na 3 elemencie (czy 4? pierwszy jest 0)
for(var i=0; i<tablica.length; i++) {
    console.log('Index: ' + i + ', ' + 'wartość: '+ tablica[i]);
    
    if (i === 3) {
        break;
    }

}


for(var i=0; i<tablica.length; i++) {
    console.log('Index: ' + i + ', ' + 'wartość: '+ tablica[i]);
    
    if (i === 2) {
        continue;
    }

}

//kod poniżej - pominęliśmy "5"
for (var b=0; b<10; ++b) {
    if (b === 5) {
        continue;
    } else {
        console.log(b);
    }
    
    console.log('--');
}

//JSON
var jsonOsoby = {
    "osoby": [
        {
            imie: 'Krystian',
            nazwisko: 'Dziopa',
            zainteresowania: [
                {nazwa: 'podróże'},
                {nazwa: 'gotowanie'}
            ]
        },
        {
            imie: 'Dominik',
            nazwisko: 'Gaudyn',
            zainteresowania: [
                {nazwa: 'akrobatyka'},
                {nazwa: 'koszykówka'}
            ]
        },
        {
            imie: 'Anna',
            nazwisko: 'Nowak',
            zainteresowania: [
                {nazwa: 'języki'},
                {nazwa: 'książki'}
            ]
        }
    ]
}

console.log(jsonOsoby);

//chcemy samo imie Dominika VVV
console.log(jsonOsoby.osoby[1].imie);

//chcemy same imiona wszystkich osób
console.log(jsonOsoby.osoby.length);
for(var i = 0; i<jsonOsoby.osoby.length; i++) {
    console.log(jsonOsoby.osoby[i].imie);
}

//chcemy same imiona i nazwiska wszystkich osób
for(var i = 0; i<jsonOsoby.osoby.length; i++) {
    console.log(jsonOsoby.osoby[i].imie + ' ' + jsonOsoby.osoby[i].nazwisko);
}

//chcemy same imiona i nazwiska wszystkich osób - drugi sposób
jsonOsoby.osoby.forEach(function (element, index) {
    console.log(element.imie + ' ' + element.nazwisko);
})

//chcemy samo gotowanie
console.log(jsonOsoby.osoby[0].zainteresowania[1].nazwa);

for (var i=0; i < jsonOsoby.osoby.length; i++) {
    for(var j=0; j < jsonOsoby.osoby[i].zainteresowania.length; j++) {
        console.log(jsonOsoby.osoby[i].zainteresowania[j].nazwa);
    } 
}


//// workshop - można wrzucić do replita
//Mogę sobie opisać jak Gmoch strzałeczkami :))) 

// funkcja z trzema parametrami
function mnozenie(workshop1, workshop2, workshop3) {
    //zmienna lokalna trzyma iloczyn trzech parametrów
    var wynik1 = workshop1 * workshop2 * workshop3;
    //zwracam wynik - zmienna która trzyma wynik działania
    return wynik1;
}

//zmienna globalna do której przypisuje wartość funkcji iloczyn (podaje parametry)
var aaa = mnozenie(1, 2, 3);

//wrzucam do konsoli zmienną która trzyma wynik
console.log(aaa);