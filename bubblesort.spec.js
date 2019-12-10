describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
  });

  describe('Bubble Sort', function(){
    it('returns an array', function(){
      const array = bubbleSort([4, 6, 2])
      expect(Array.isArray(array)).toBe(true);
    });
  });

  describe('Bubble Sort', function(){
    it('sorts a numerical array', function(){
      expect( bubbleSort([5, 7, 1, 9, 3]) ).toEqual( [1, 3, 5, 7 , 9] );
    });
  });