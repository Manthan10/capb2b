namespace org.qmacro;

// using from '@sap/cds-common-content';

using {
    cuid,
    managed
// Country
} from '@sap/cds/common';


// function hello(to : String) returns String;
entity Books : cuid, managed {
    title  : String;
    author : Association to Authors;
}

entity Authors : cuid {
    name  : String;
    // countryOfBirth : Country;
    books : Association to many Books
                on books.author = $self; // to many association
}
