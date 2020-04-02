define(['./races.js'], races => {
  var buildbyname = {}
  Object.keys(races).forEach(race =>
    races[race].forEach(
      build =>
        (buildbyname[build.Name] = {
          ...build,
          race,
          racecolor: { human: '#2f3130', orc: '#2f3130', undead: '#2f3130', nightelf: '#2f3130' }[race],
          racedarkcolor: { human: '#252420', orc: '#252420', undead: '#252420', nightelf: '#252420' }[race],
        })
    )
  )
  return buildbyname
})
