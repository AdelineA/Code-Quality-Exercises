const numberFormat = function(number){
    return new Intl.NumberFormat('locales').format(number)
}