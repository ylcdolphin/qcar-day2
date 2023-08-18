function 左轉 () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
}
function 右轉 () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
}
function 後退 () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
}
function 停車 () {
    maqueen.motorStop(maqueen.Motors.All)
}
function 前進 () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
}
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        右轉()
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        左轉()
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        後退()
    } else {
        前進()
    }
})
