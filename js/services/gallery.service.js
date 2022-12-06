'use strict'




var gProjs=[]
console.log('progs:',gProjs)

createProjs()

function createProjs() {
    _createProj ('minesweeper','Minesweeper','the old game in a new look and special modifications',null,
    'https://yardennaor.github.io/mine-sweeper/',1670244443490,['matrixes','keyboard events'])
    // _createProj ('sokoban','Sokoban','Better push those boxes','lorem ipsum lorem ipsum lorem ipsum',
    // 'projs/sokoban',1448693940000,['Matrixes', 'keyboard events'])
    _createProj('todos','Todos')
    _createProj('pacman','Pacman')
    _createProj('touch-nums','Touch-nums')
    _createProj('in-picture','In-picture')
    _createProj('ball-board','Ball-board')
    _createProj('book-shop','book-shop')
    console.log('progs:',gProjs)
    }




function _createProj (id,name,title,desc,url,publishedAt,labels) {

 const proj= {
    id,
    name,
    title,
    desc,
    url,
    publishedAt,
    labels
   }
   console.log('projs:',gProjs)
   gProjs.push(proj)

}

// const time= toTimestamp(2022,10,22,0,0,0)
// console.log('time:',time)

// function toTimestamp(year,month,day,hour,minute,second){
//     var datum = new Date(Date.UTC(year,month-1,day,hour,minute,second));
//     return datum.getTime()/1000;
//    }


function getProjs(){
    return gProjs
}

function getProjById(projId){
    return gProjs.find(proj=>proj.id===projId)
} 