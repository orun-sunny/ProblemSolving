function generateCourseList (subject){
    var courseIbject ={
        name:'course-name',
        code: 'course-id'
    }

    var courseList =[];
    switch (subject){
        case 'nodejs':
            let nodejsl =courseIbject;
            nodejsl.name = 'NodeJS Beginner';
            nodejsl.code = 'N101';
            courseList.push(nodejsl);
            break;
        case 'html' :
            let html = courseIbject;
            html.name = 'HTML';
            html.code='N101';
            courseList.push(html);
            break;
    }



    return(courseList) ;
}
var myCourses = generateCourseList('nodejs')
