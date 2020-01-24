function getGrade (s1, s2, s3) {
    let gradeMean = (s1 + s2 + s3)/3
    if (gradeMean >= 90){
    return 'A'
    } else if (gradeMean >= 80){
    return 'B'
    } else if (gradeMean >= 70){
    return 'C'
    } else if (gradeMean >= 60){
    return 'D'
    } else if (gradeMean < 60){
    return 'F'
    }
    };

    //CHAINED TURNARY
    function getGrade (s1, s2, s3) {
        let gradeMean = (s1 + s2 + s3)/3
        return gradeMean >=90 ? 'A'
        : gradeMean >=80 ? 'B'
        : gradeMean >=70 ? 'C'
        : gradeMean >=60 ? 'D' : 'F'
        };