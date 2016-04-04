

Test.describe("Frog jumping test case", function() {
    Test.it("simple tests", function() {
        Test.assertEquals(solution([1, 2, 2, -1]), 4);
        Test.assertEquals(solution([1, 2, 1, 5]), 3);
        Test.assertEquals(solution([1, 1, 1, 1]), 4);
        Test.assertEquals(solution([1, -1]), -1);
        Test.assertEquals(solution([-3]), 1);
    })
})