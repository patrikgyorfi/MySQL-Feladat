# Feladat 2017-11-02

## CRUD API
> Az API bet�sz� jelent�se Application Programming Interface. Teh�t egy olyan 
interf�sz (kapcsol�d�si fel�let), amin kereszt�l programozhatunk egy alkalmaz�st ak�r k�v�lr�l, m�s alkalmaz�sokb�l is. Nem kell hozz� ismern�nk az alkalmaz�s m�k�d�s�t, el�g ha a sz�ks�ges parancsokat ismerj�k, amelyekkel tudjuk vez�relni.

## Az API m�k�d�se
> Az API PHP nyelven k�sz�lt, de nem sz�ks�ges a haszn�lat�hoz a PHP ismerete.

### config.php
> Az adatb�zishoz val� csatlakoz�st adatait �s a routing szab�lyokat tartalmazza. P�lda be�ll�t�sok is vannak benne, ezek alapj�n k�nnyen elk�sz�thetitek a saj�t rendszereteket.

### DB
> A DB szekci� tartalmazza az adatb�zis kapcsol�d�shoz sz�ks�ges h�rom adatot: 
* Adatb�zis neve (DBNAME)
* Adatb�zis felhaszn�l� neve (DBUSER)
* Adatb�zis felhaszn�l� jelszava (DBPASSWORD)

### ROUTING
> A routing szekci�ban adhatj�tok meg, hogy melyik url eset�n melyik lek�rdez�s fusson le? A lek�rdez�seket az sql nev� almapp�ban kell elhelyezni. Nem kell megadni a mappa nev�t, csup�n a f�jl neve sz�ks�ges.

## Feladat
### Admin fel�let
> A frontend oldali admin fel�letet sablon alapj�n k�sz�ts�tek el. Ehhez itt tal�ltok sablonokat �s seg�ts�get:  
[SB Admin](https://startbootstrap.com/template-overviews/sb-admin/)  
[SB Admin 1&2](https://startbootstrap.com/template-categories/admin-dashboard/)  
[Gentellela !Expert](https://github.com/puikinsh/gentelella)  
[Metis !Intermadiate](https://github.com/puikinsh/Bootstrap-Admin-Template)  

### Admin fel�let - JS
> Mell�keltem JAVASCRIPT f�ggv�nyeket a main.js f�jlban. Ezekkel k�sz kommunik�ci�t tudtok folytatni a PHP API -val. A f�ggv�nyek el�tt kommentben r�viden le van �rva a haszn�latuk.

### Adatb�zis
> Hozzatok l�tre egy �j adatb�zist felhaszn�l�val egy�tt az adatok t�rol�s�ra. Legyen benne legal�bb 5 t�bla, p�ld�ul (users, products, orders, customers, prices). Minden t�bl�nak legal�bb 5 mez�je legyen. A t�bl�k k�z�tt legyen kapcsolat id-k alapj�n, p�ld�ul az orders t�bl�ban legyen customer_id, innen tudja a rendsze, hogy ki a megrendel�. Ugyan�gy fontos a kapcsolat p�ld�ul az orders �s a products t�bl�k k�z�tt, mivel az orders t�bl�ban fel kell t�ntetni hogy melyik term�ket rendelt�k meg.

_p�lda felhaszn�l� �s jelsz�: bestyellow/BVxfn7gaLppkcSty_