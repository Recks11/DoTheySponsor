enum Ratings {
   A1 = "A (Premium)",
   A2 = "A (SME+)",
   A = "A Rating",
   B = "B Rating",
   C = "Probationary Sponsor",
   UNKNOWN = "Unknown"
}

const percentages = {
   ["A (Premium)"]: 100,
   ["A (SME+)"]: 100,
   ["A Rating"]: 100,
   ["B Rating"]: 80,
   ["Probationary Sponsor"]: 60,
   ["Unknown"]: 0
}

export function extractRating(rating: string) {
   switch (rating) {
      case 'A1': return Ratings.A1
      case 'A2': return Ratings.A2
      case 'A': return Ratings.A
      case 'B': return Ratings.B
      case 'C': return Ratings.C
      default: return Ratings.UNKNOWN
   }
}

export function parsePercentage(rating: string) {
   let rate = extractRating(rating)

   return percentages[rate]
}

