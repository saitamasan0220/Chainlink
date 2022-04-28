contract PriceConsumerV3 {
    AggregatorV3Interface internal priceFeed;

    constructor(address _priceFeed) {
        priceFeed = AggregatorV3Interface(priceFeed);
    }

    /*
    Network: Kovan
    Aggregator: ETH/USD
*/

    function getLatestPrice() {}
}
