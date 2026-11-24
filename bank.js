const categoryFacts = {
  'Signs and signals': [
    ['stop signs', 'A STOP sign requires a complete stop before the limit line, crosswalk, or intersection.'],
    ['yield signs', 'A YIELD sign means slow down, be prepared to stop, and give right-of-way when required.'],
    ['flashing red signals', 'A flashing red signal is treated like a stop sign.'],
    ['flashing yellow signals', 'A flashing yellow signal means slow down and proceed with caution.'],
    ['yellow warning signs', 'Yellow diamond signs warn about conditions or hazards ahead.'],
    ['orange work-zone signs', 'Orange signs warn about construction, maintenance, or people working on the road.'],
    ['school-zone signs', 'School-zone signs warn drivers to watch for children and obey the posted speed or instructions.'],
    ['railroad-crossing signs', 'Railroad-crossing signs mean drivers should slow, look, and listen for trains.'],
    ['lane-control signals', 'A red X over a lane means do not drive in that lane.'],
    ['sign shapes', 'A red octagon is reserved for STOP signs, helping drivers recognize it quickly.']
  ],
  'Pavement markings': [
    ['broken white lines', 'A broken white line separates lanes moving in the same direction and may be crossed when safe.'],
    ['solid white lines', 'A solid white line means lane changes are discouraged or restricted in that location.'],
    ['yellow center lines', 'Yellow lines separate traffic moving in opposite directions.'],
    ['double solid yellow lines', 'Double solid yellow lines generally mean passing is not allowed in either direction.'],
    ['a broken yellow line', 'A broken yellow line may be crossed to pass when it is safe and legal.'],
    ['stop lines', 'A stop line marks where the front of a vehicle should stop.'],
    ['crosswalk markings', 'Crosswalk markings identify a place where pedestrians may cross the roadway.'],
    ['turn arrows', 'A lane arrow shows the direction or directions of travel allowed from that lane.'],
    ['two-way left-turn lanes', 'A shared center turn lane is for left turns, not for passing or regular travel.'],
    ['bicycle-lane markings', 'A marked bicycle lane is intended for bicycle travel and should be checked before crossing.']
  ],
  'Right-of-way': [
    ['four-way stops', 'At a four-way stop, the first vehicle to stop generally goes first.'],
    ['arriving together at a stop', 'When vehicles arrive together, the vehicle on the right generally has right-of-way.'],
    ['left turns', 'A driver turning left must yield to oncoming traffic and pedestrians unless directed otherwise.'],
    ['pedestrians in crosswalks', 'Drivers must yield to pedestrians who are in a crosswalk or crossing as allowed by law.'],
    ['right turns on red', 'A right turn on red requires a complete stop and yielding before turning, unless prohibited.'],
    ['uncontrolled intersections', 'At an uncontrolled intersection, slow down and yield to traffic already in the intersection.'],
    ['roundabouts', 'Traffic entering a roundabout yields to traffic already circulating.'],
    ['emergency vehicles', 'Drivers should yield and move safely for emergency vehicles using lights or sirens.'],
    ['driveways', 'Drivers entering a roadway from a driveway must yield to roadway traffic and pedestrians.'],
    ['backing vehicles', 'A driver backing up must yield to traffic and pedestrians and should check all directions.']
  ],
  'Safe speed and space': [
    ['posted speed limits', 'A posted speed limit is the maximum legal speed under normal conditions, not a target for every condition.'],
    ['reasonable speed', 'Drivers must reduce speed when road, weather, traffic, or visibility conditions make the posted speed unsafe.'],
    ['following distance', 'A driver should leave at least a two-second following distance in normal conditions.'],
    ['poor weather spacing', 'Following distance should be increased when roads are wet, icy, or visibility is reduced.'],
    ['stopping distance', 'Stopping distance includes the time to notice and react plus the distance needed to brake.'],
    ['curves', 'Drivers should slow before entering a curve instead of braking hard in the curve.'],
    ['hills', 'Drivers should control speed before going downhill and be alert for traffic hidden by the hill.'],
    ['work zones', 'Drivers should slow down, stay alert, and follow temporary work-zone signs.'],
    ['school areas', 'Drivers should obey the posted school-zone speed and watch carefully for children.'],
    ['motorcycle spacing', 'Drivers should allow extra following space behind motorcycles because they can stop quickly.']
  ],
  'Turning and lane use': [
    ['turn signals', 'A driver should signal early enough to warn others before turning or changing lanes.'],
    ['blind spots', 'Mirrors do not show every area beside a vehicle, so drivers should check blind spots before moving.'],
    ['lane changes', 'A safe lane change requires a signal, mirror checks, a blind-spot check, and a safe gap.'],
    ['passing', 'A driver should pass only when visibility, markings, and traffic conditions make it legal and safe.'],
    ['passing on hills', 'Passing near a hill or curve is dangerous because approaching traffic may be hidden.'],
    ['merging', 'When merging, drivers should match traffic speed when possible and select a safe gap.'],
    ['highway exits', 'A driver who misses an exit should continue to the next exit rather than backing up.'],
    ['U-turns', 'A U-turn should be made only where legal and where the driver can see enough to do it safely.'],
    ['turn position', 'A driver should approach a turn from the lane designated for that movement.'],
    ['lane arrows', 'A driver must follow lane-use arrows and may not turn from a lane marked for another movement.']
  ],
  'Sharing the road': [
    ['school buses', 'A driver must stop for a school bus displaying flashing red lights as required by law.'],
    ['pedestrians', 'Drivers should slow and look for pedestrians before crossing sidewalks, crosswalks, and driveways.'],
    ['bicycles', 'Bicyclists have a right to use the roadway and drivers should pass with adequate clearance.'],
    ['motorcycles', 'Motorcycles are smaller and can be hidden in blind spots, so drivers should check carefully.'],
    ['large trucks', 'Large trucks need more room to stop and turn than passenger vehicles.'],
    ['truck blind spots', 'A driver should avoid lingering beside a truck where the truck driver may not see the vehicle.'],
    ['emergency vehicles', 'When passing a stopped emergency vehicle, move away when safe or slow down and use caution.'],
    ['road workers', 'Drivers should slow down and follow directions when approaching workers or maintenance vehicles.'],
    ['slow vehicles', 'A slow-moving vehicle warning means the vehicle ahead travels at a low speed.'],
    ['parked vehicles', 'Drivers should watch for doors opening and people stepping out from between parked vehicles.']
  ],
  'Defensive driving': [
    ['scanning ahead', 'Good drivers look well ahead and keep checking mirrors and side areas.'],
    ['visual search', 'Drivers should keep their eyes moving instead of staring at one object for too long.'],
    ['following other drivers', 'A driver should expect that another driver may stop or turn unexpectedly.'],
    ['intersections', 'Drivers should scan left, right, and left again before entering an intersection.'],
    ['night driving', 'At night, drivers should reduce speed enough to stop within the distance they can see.'],
    ['headlight glare', 'When facing glare, drivers should look toward the right edge of the roadway and slow down.'],
    ['fatigue', 'Drowsy drivers should stop driving and rest rather than trying to overcome fatigue.'],
    ['distraction', 'A driver should put away distractions and keep attention on the driving task.'],
    ['aggressive drivers', 'The safest response to an aggressive driver is to avoid engagement and create distance.'],
    ['seat belts', 'Every occupant should use a properly adjusted seat belt on every trip.']
  ],
  'Weather and emergencies': [
    ['hydroplaning', 'If a vehicle hydroplanes, ease off the accelerator and avoid sudden braking or steering.'],
    ['heavy rain', 'During heavy rain, slow down, increase following distance, and use headlights.'],
    ['fog', 'In fog, use low beams and reduce speed because high beams can reflect back and reduce visibility.'],
    ['ice', 'On icy roads, make gentle steering, braking, and acceleration inputs.'],
    ['flooded roads', 'A driver should not enter a flooded roadway when the depth or road condition is uncertain.'],
    ['tire blowouts', 'During a blowout, grip the wheel, ease off the accelerator, and slow gradually.'],
    ['brake failure', 'If brakes fail, remain calm, try pumping the pedal, and use available ways to slow safely.'],
    ['skids', 'During a skid, ease off the accelerator and steer in the direction the vehicle needs to travel.'],
    ['vehicle fires', 'If a vehicle catches fire, stop, turn off the engine, get everyone out, and move away.'],
    ['breakdowns', 'A disabled vehicle should be moved out of traffic when possible and made visible to others.']
  ],
  'Traffic stops and laws': [
    ['pulling over', 'When signaled by an officer, signal and pull to the closest safe place out of traffic.'],
    ['hands during a stop', 'During a stop, keep both hands visible and avoid sudden movements.'],
    ['documents', 'A driver must provide a driver license, proof of insurance, and vehicle registration when requested.'],
    ['night stops', 'During a nighttime stop, turning on the interior light helps the officer see inside.'],
    ['mobile devices', 'Drivers should put down mobile devices and give the officer full attention during a stop.'],
    ['citations', 'Signing a citation is generally a promise to appear or address the citation, not an admission of guilt.'],
    ['contesting a citation', 'A driver who wishes to contest a citation should contact the court listed on it.'],
    ['passing stopped officers', 'Drivers should move to the farthest lane away from a stopped authorized vehicle when safe.'],
    ['littering', 'Throwing litter from a vehicle is against Arkansas law and can result in penalties.'],
    ['courtesy', 'Drivers should remain courteous during a stop even when they disagree with an officer.']
  ],
  'Impaired and distracted driving': [
    ['alcohol', 'Alcohol can reduce judgment, coordination, and reaction time before a driver feels impaired.'],
    ['drugs', 'Prescription and other drugs can impair driving even when they are legally obtained.'],
    ['sober driving', 'The safest choice after drinking or using an impairing substance is not to drive.'],
    ['texting', 'Texting takes visual, manual, and mental attention away from driving.'],
    ['phone calls', 'A phone conversation can distract a driver even when the phone is hands-free.'],
    ['passengers', 'Passengers should not distract the driver or interfere with safe vehicle operation.'],
    ['emotions', 'Strong anger or excitement can affect judgment and should be settled before driving.'],
    ['drowsiness', 'Drowsiness slows reactions and can be as dangerous as other forms of impairment.'],
    ['medication labels', 'Drivers should read medication warnings and ask a pharmacist about driving effects.'],
    ['safe alternatives', 'A sober friend, taxi, rideshare, or staying where you are can prevent impaired driving.']
  ],
  'Vehicle control and parking': [
    ['starting', 'Before moving, the driver should check surroundings, signal when needed, and release the brake smoothly.'],
    ['steering', 'Drivers should keep both hands available and make smooth steering movements.'],
    ['braking', 'Smooth, controlled braking helps maintain traction and vehicle control.'],
    ['backing', 'Before backing, check behind and in all directions and move slowly.'],
    ['downhill parking', 'When parking downhill next to a curb, turn the front wheels toward the curb.'],
    ['uphill parking', 'When parking uphill next to a curb, turn the front wheels away from the curb.'],
    ['parking brakes', 'Set the parking brake whenever parking, especially on a slope.'],
    ['mirrors', 'Mirrors should be adjusted before moving so the driver can monitor surrounding traffic.'],
    ['vehicle controls', 'A driver should know the location of essential controls before driving in traffic.'],
    ['loads', 'Cargo should be secured so it cannot shift, fall, or block the driver’s view.']
  ],
  'License and test-day basics': [
    ['instruction permits', 'An instruction permit allows supervised practice under the restrictions that apply to it.'],
    ['skills tests', 'A skills test evaluates the applicant’s ability to control and operate a vehicle safely.'],
    ['test vehicles', 'The applicant generally provides the vehicle used for a skills test.'],
    ['vehicle condition', 'A test vehicle must have required equipment in safe working order.'],
    ['proof of insurance', 'Applicants should bring required proof of insurance for a vehicle used in testing.'],
    ['registration', 'The vehicle used for testing should have current registration as required.'],
    ['appointments', 'Applicants should schedule the correct appointment type for the exam they need.'],
    ['road-test preparation', 'A driver should practice starting, stopping, turning, lane changes, and parking before testing.'],
    ['permit documents', 'Applicants should bring the original permit and required identification documents.'],
    ['safe test habits', 'During a road test, follow signs, signal, check surroundings, and make safe decisions.']
  ]
};

const categoryNames = Object.keys(categoryFacts);
const questionBank = categoryNames.flatMap(category => categoryFacts[category].map(([topic, answer], index) => ({
  id: `${category}-${index + 1}`,
  category,
  topic,
  q: `Which statement is correct about ${topic}?`,
  a: [answer, 'This rule can be ignored when traffic is light.', 'The safest choice is to do the opposite.', 'This applies only when another driver is watching.'],
  correct: 0,
  why: answer,
  page: category
})));
