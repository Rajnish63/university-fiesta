import { University } from './temp_data';
import _ from require('lodash');
// import {
//     v1 as neo4j
// } from 'neo4j-driver';
// const bcrypt = require('bcryptjs');
// const jsonwebtoken = require('jsonwebtoken');

// require('dotenv').config();

// var driver = neo4j.driver("bolt://db:7687", neo4j.auth.basic("neo4j", "_^p7dHe*hJXp7aGd"));
// var session = driver.session();


let cllgs = [];

export default {
    Query: {
        college: async (_, args, ctx) => {
            return cllgs;
        }
    },
    Mutation: {
        createCollege: async (_, {id}, cntx) => {
            let newCllg = new University(args.username, args.name, args.website, args.address, args.headquarters, 
                args.affiliation, args.description, args.founderName, args.yearFounded, args.numOfStudents);
            cllg.push(newCllg);
            return newCllg;
        },
        updateCollege: async (_, {id}, cntx) => {
            // _.up(cllgs, function(n){
            //     return id == n.id;
            // });
            return 'updated';
        },
        removeCollege: async (_, {id}, cntx) => {
            _.remove(cllgs, function(n){
                return id == n.id;
            });
            return 'deleted';
        },
    }
};