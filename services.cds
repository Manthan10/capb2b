using {
    cuid,
    managed,
    Country
} from '@sap/cds/common';

service bookshop {
    // function hello(to : String) returns String;
    entity Books : cuid, managed {
        title : String;
    }

    entity Authors : cuid {
        name           : String;
        countryOfBirth : Country;
    }
}
