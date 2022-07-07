import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tokens'
})
@Injectable()
export class TokensPipe implements PipeTransform {

  transform(content: string, token: string, replacement: string | number | Record<string,string>): string {
    const regex = new RegExp("\\$\\{" + token + "\\}", "gim");
    if(!content) return content;

    //if a hashed lookup of terms is provided for replacement, return the matching value of the kv pair
    if(typeof replacement === "object") return content.replace(regex, replacement[token] ?? "");
    return content.replace(regex,replacement.toString());
  }
}
