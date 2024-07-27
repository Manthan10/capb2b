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
    stock  : Integer;
    price  : Integer
}

entity Authors : cuid {
    name  : String;
    // countryOfBirth : Country;
    books : Association to many Books
                on books.author = $self; // to many association
}

entity Orders : cuid {
    comment : String;

    Items   : Composition of many {
                  key pos      : Integer;
                      quantity : Integer;
                      book     : Association to Books;
              }
// Items   : Composition of many OrderItems
//               on Items.parent = $self;
}

// entity OrderItems {
//     key parent   : Association to Orders;
//     key pos      : Integer;
//         quantity : Integer;
//         book     : Association to Books;
// }
