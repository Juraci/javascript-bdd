var genericPost = {
    x: 0,
    y: 0,
    postNum: undefined,
    connectionsTo: undefined,
    sendRopeTo: function(connectedPost) {
        if (this.connectionsTo === undefined) {
            var postArray = [];
            postArray.push(connectedPost);
            this.connectionsTo = postArray;

        } else {
            this.connectionsTo.push(connectedPost);

        }

    }
};

module.exports = genericPost;
