function mumble_letters (letters){
    if(letters.length === 2){
        return `${letters[0].toUpperCase()}-${letters[1].toUpperCase()}${letters[1].toLowerCase()}`
    }
    
    return letters.toUpperCase()
  }
    
    test('Empty test', () => {
        expect(true).toBe(true)
    })
    test('Mumbles nothing', () => {
      expect(mumble_letters('')).toBe('')
    })
    test('Mumbles a single letter "A"', () => {
      expect(mumble_letters('a')).toBe('A')
    })
    test('Mumbles a single letter "B"', () => {
        expect(mumble_letters('b')).toBe('B')
    })
    test('Mumbles a capital letter "A"', () => {
        expect(mumble_letters('A')).toBe('A')
    })
    test('Mumbles a two letter word', () => {
        expect(mumble_letters('aa')).toBe('A-Aa')
    })
    test('Mumbles a two letter word "bb"', () => {
        expect(mumble_letters('bb')).toBe('B-Bb')
    })
    test('Mumbles a two letter word "cc"', () => {
        expect(mumble_letters('cc')).toBe('C-Cc')
    })
    test('Mumbles a two letter word "CC"', () => {
        expect(mumble_letters('CC')).toBe('C-Cc')
    })
    test('Mumbles a two letter word "ab"', () => {
        expect(mumble_letters('ab')).toBe('A-Bb')
    })
    test('Mumbles a two letter word "AB"', () => {
        expect(mumble_letters('AB')).toBe('A-Bb')
    })
    test('Mumbles a three letter word "aaa"', () => {
        expect(mumble_letters('aaa')).toBe('A-Aa-Aaa')
    })
