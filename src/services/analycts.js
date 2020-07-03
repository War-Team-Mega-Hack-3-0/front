window.dataLayer = window.dataLayer || []

// const locals = {}

export function sendEvent({ category, action, label }) {
  const event = {
    event: 'ga.event',
    gaCategory: category,
    gaAction: action,
    gaLabel: label || null
  }

  window.dataLayer.push(event)
}

// export function setUser() {
//   if (!locals.userId) {
//     const user = ((storage.get() || { user: {} })).user
//     locals.userId = user.id
//   }

//   window.dataLayer.push({
//     userId: locals.userId,
//   })
// }
