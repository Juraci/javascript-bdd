describe('Posts', function (){
    var Fencepost = require('../../lib/posts/posts.js');
    var post1;
    var post2;

    it('should connect 2 posts', function (){
        post1 =  new Fencepost(-2, 4, 1);
        post2 = new Fencepost(5, 1, 2);

        post1.sendRopeTo(post2);
        post2.sendRopeTo(post1);
        expect(post1.connectionsTo.pop()).toBe(post2);
        expect(post2.connectionsTo.pop()).toBe(post1);
    });
});
