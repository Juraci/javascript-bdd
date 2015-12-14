describe('Posts', function (){
    var genericPost = require('../../lib/posts/posts.js');
    var post1;
    var post2;

    it('should connect 2 posts', function (){
        post1 =  Object.create(genericPost);
        post1.x = -2;
        post1.y = 4;
        post1.postNum = 1;

        post2 = Object.create(genericPost);
        post2.x = 5;
        post2.y = 1;
        post2.postNum = 2;

        post1.sendRopeTo(post2);
        post2.sendRopeTo(post1);
        expect(post1.connectionsTo.pop()).toBe(post2);
        expect(post2.connectionsTo.pop()).toBe(post1);
    });
});
