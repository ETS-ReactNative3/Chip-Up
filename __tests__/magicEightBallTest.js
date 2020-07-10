import {
  YesResponse,
  PerhapsResponse,
  MaybeResponse,
  NotTodayResponse,
  AskAgainLaterResponse,
  BetterNotTellResponse,
  OnThisMonthResponse,
  IfNameStartsWithResponse,
  IfThisHeightResponse,
  IfFanOfThisMovieGoodResponse
} from '../utils/magicEightBall'
const months = ['January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December']
const when = ['before', 'after']
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const inches = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5, 8.5, 9.5, 10.5, 11.5]
const tallerOrShorter = ['taller', 'shorter']
const goodMovies = ['the Lord of the Rings',
  'The Matrix',
  'Parasite',
  'Memento',
  'No Country For Old Men',
  'Back to the Future',
  'Jurassic Park',
  'The Dark Knight',
  'Inglourious Basterds',
  'Her',
  'The Shawshank Redemption',
  'Blade Runner']

describe('YesReponse', () => {
  describe('getResults()', () => {
    const yesResponse = new YesResponse()
    const yesResults = yesResponse.getResults()
    test('answer should be Yes', () => {
      expect(yesResults.answer).toBe('Yes');
    })
    test('index should be 0', () => {
      expect(yesResults.index).toBe(0);
    })
  })
})

describe('PerhapsResponse', () => {
  describe('getResults()', () => {
    const perhapsResponse = new PerhapsResponse()
    const perhapsResults = perhapsResponse.getResults()
    test('answer should be Perhaps', () => {
      expect(perhapsResults.answer).toBe('Perhaps');
    })
    test('index should be 1', () => {
      expect(perhapsResults.index).toBe(1);
    })
  })
})

describe('MaybeResponse', () => {
  describe('getResults()', () => {
    const maybeResponse = new MaybeResponse()
    const maybeResults = maybeResponse.getResults()
    test('answer should be Maybe', () => {
      expect(maybeResults.answer).toBe('Maybe');
    })
    test('index should be 2', () => {
      expect(maybeResults.index).toBe(2);
    })
    test('index should be not be anything other than 2', () => {
      expect(maybeResults.index).not.toBe(1);
    })
  })
})

describe('NotTodayResponse', () => {
  describe('getResults()', () => {
    const notTodayResponse = new NotTodayResponse()
    const notTodayResults = notTodayResponse.getResults()
    test('answer should be Not today bud', () => {
      expect(notTodayResults.answer).toBe('Not today bud');
    })
    test('index should be 3', () => {
      expect(notTodayResults.index).toBe(3);
    })
    test('index should be not be anything other than 3', () => {
      expect(notTodayResults.index).not.toBe(4);
    })
  })
})

describe('AskAgainLaterresponse', () => {
  describe('getResults()', () => {
    const askAgainLaterResponse = new AskAgainLaterResponse()
    const askAgainLaterResults = askAgainLaterResponse.getResults()
    test('answer should start with Ask again in', () => {
      expect(askAgainLaterResults.answer.includes('Ask again in')).toBe(true);
    })
    test('index should be 4', () => {
      expect(askAgainLaterResults.index).toBe(4);
    })
    test('askAgainLaterResults.randomHour should be between 1 and 12', () => {
      expect(askAgainLaterResults.randomHour >= 1 || askAgainLaterResults.randomHour <= 12).toBe(true);
    })
  })
})

describe('BetterNotTellResponse', () => {
  describe('getResults()', () => {
    const betterNotTellResponse = new BetterNotTellResponse()
    const betterNotTellResults = betterNotTellResponse.getResults()
    test('answer should be better not not say, sorry', () => {
      expect(betterNotTellResults.answer).toBe('Better to not say, sorry');
    })
    test('index should be 5', () => {
      expect(betterNotTellResults.index).toBe(5);
    })
  })
})

describe('OnThisMonthResponse', () => {
  describe('getResults()', () => {
    const onThisMonthResponse = new OnThisMonthResponse()
    const onThisMonthResults = onThisMonthResponse.getResults()
    test('answer should start with If you were born', () => {
      expect(onThisMonthResults.answer.includes('If you were born')).toBe(true);
    })
    test('index should be 6', () => {
      expect(onThisMonthResults.index).toBe(6);
    })
    test('randomWhen should be either before or after', () => {
      expect(when.includes(onThisMonthResults.randomWhen)).toBe(true);
    })
    test('randomMonth should be either be a valid month', () => {
      expect(months.includes(onThisMonthResults.randomMonth)).toBe(true);
    })
  })
})

describe('IfNameStartsWithResponse', () => {
  describe('getResults()', () => {
    const ifNameStartsWithResponse = new IfNameStartsWithResponse()
    const ifNameStartsWithResults = ifNameStartsWithResponse.getResults()
    test('answer should start with If your name starts with a', () => {
      expect(ifNameStartsWithResults.answer.includes('If your name starts with a')).toBe(true);
    })
    test('index should be 7', () => {
      expect(ifNameStartsWithResults.index).toBe(7);
    })
    test('randomLetter should be a valid upperCase letter', () => {
      expect(alphabet.includes(ifNameStartsWithResults.randomLetter)).toBe(true);
    })
  })
})


describe('IfThisHeightResponse', () => {
  describe('getResults()', () => {
    const ifThisHeightResponse = new IfThisHeightResponse()
    const ifThisHeightResults = ifThisHeightResponse.getResults()
    test('answer should start with If you\'re', () => {
      expect(ifThisHeightResults.answer.includes('If you\'re')).toBe(true);
    })
    test('index should be 8', () => {
      expect(ifThisHeightResults.index).toBe(8);
    })
    test('randomFeet should be between 3 and 7', () => {
      expect(ifThisHeightResults.randomFeet >= 3 && ifThisHeightResults.randomFeet <= 7).toBe(true);
    })
    test('randomInches should be a valid number(1-11 increments of .5)', () => {
      expect(inches.includes(ifThisHeightResults.randomInches)).toBe(true);
    })
    test('randomTallerOrShorter either be taller or shorter', () => {
      expect(tallerOrShorter.includes(ifThisHeightResults.randomTallerOrShorter)).toBe(true);
    })
  })
})

describe('IfFanOfThisMovieGoodResponse', () => {
  describe('getResults()', () => {
    const ifFanOfThisMovieGoodResponse = new IfFanOfThisMovieGoodResponse()
    const ifFanOfThisMovieGoodResults = ifFanOfThisMovieGoodResponse.getResults()
    test('answer should include you\'re in  luck!', () => {
      expect(ifFanOfThisMovieGoodResults.answer.includes('you\'re in luck!')).toBe(true);
    })
    test('index should be 9', () => {
      expect(ifFanOfThisMovieGoodResults.index).toBe(9);
    })
    test('randomMovie should be a valid good movie', () => {
      expect(goodMovies.includes(ifFanOfThisMovieGoodResults.randomMovie)).toBe(true);
    })
  })
})
