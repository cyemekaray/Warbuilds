define(['./races.js'], races => {
  var buildbyname = {}
  Object.keys(races).forEach(race =>
    races[race].forEach(
      build =>
        (buildbyname[build.Name] = {
          ...build,
          race,
          racecolor: { human: '	#87CEFA', orc: '#fa989e', undead: '#c8b7e8', nightelf: '#bfffbf' }[race],
          racedarkcolor: { human: 'darkblue', orc: 'darkred', undead: 'indigo', nightelf: 'darkgreen' }[race],
        })
    )
  )
  return buildbyname
})
