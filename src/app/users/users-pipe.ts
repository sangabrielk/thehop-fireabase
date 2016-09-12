import { Pipe, PipeTransform } from '@angular/core';
/*
 * Transform object to list of array
 * Usage:
 *   [{"nickname":"sompop"}, {"nickname":"sompap"}] | filterByNickname:"pop"
 * Example:
 *   [{"nickname":"sompop"}, {"nickname":"sompap"}] | filterByNickname:"pop"
 *   formats to: [{"nickname":"pop"}]
*/
@Pipe({name: 'filterByUserAttribute'})
export class FilterByUserAttributePipe implements PipeTransform {
  transform(users:Array<any> , query:string): any{
      //
      if(users)
      {
        var attribute_string_search = ['nickname', 'fullname', 'email']
        var result_search = [];
        attribute_string_search.forEach(attr=>{
          result_search.push(users.filter((value, index, arr) =>{
            
            if(query)
            {
              return  value[attr].toLowerCase().indexOf(query.toLowerCase()) >= 0
            }
            return true; 

          }));
        })
       //seach for group
        result_search.push(users.filter((value, index, arr) =>{
            
            if(query)
            {
              return  value.group[query]
            }
            return true; 

          }))
        var keys={};
        var result=[];
        result_search.forEach(search_result=>{
          search_result.forEach(item=>{
            if(keys[item.$key])
            {

            }else
            {
              result.push(item);
              keys[item.$key] = true;
            }
          })
          
        })


        return result;
      }
      else
        return users
    
  }
}

