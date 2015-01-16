angular.module('accord', ['ui.bootstrap']);

function AccordionCtrl($scope) {
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: "GDP",
      axis: "y-axis",
      content: "Gross Domestic Product (GDP) is total goods and services produced (at market prices, minus taxes and subsidies on products).  Higher values represent larger economies."
    },
    {
      title: "INCOME",
      axis: "x-axis",
      content: "Personal Income Per Capita: sum of all revenues (wages, dividends, self-employment, etc) received in a year, divided by total population.  Relatively rich on the right, poor on the left."
    },
    {
      title: "EMPLOYMENT",
      axis: "diameter",
      content: "The size of a circle is determined by employment in each city.  Large circles indicate relatively more individuals in the workforce."
    }
  ];

}

function DropdownCtrl($scope) {
  
  $scope.items = ["Hamilton","London","Kitchener","Toronto","Sudbury","Montreal","Vancouver","Victoria","Saskatoon","Saguenay","St. John's","Trois-Rivieres","Saint John","Abbotsford","Edmonton","Quebec City","Winnipeg","Calgary","Windsor","Halifax","Regina","Thunder Bay","Sherbrooke","Kingston","St. Catharines-Niagara","Oshawa","Ottawa and Gatineau"];
  
}

function TypeaheadCtrl($scope) {

  $scope.selected = undefined;
  $scope.cities = ["Hamilton","London","Kitchener","Toronto","Sudbury","Montreal","Vancouver","Victoria","Saskatoon","Saguenay","St. John's","Trois-Rivieres","Saint John","Abbotsford","Edmonton","Quebec City","Winnipeg","Calgary","Windsor","Halifax","Regina","Thunder Bay","Sherbrooke","Kingston","St. Catharines-Niagara","Oshawa","Ottawa and Gatineau"];



}

