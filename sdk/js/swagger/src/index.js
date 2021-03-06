/**
 * ORY Hydra - Cloud Native OAuth 2.0 and OpenID Connect Server
 * Welcome to the ORY Hydra HTTP API documentation. You will find documentation for all HTTP APIs here. Keep in mind that this document reflects the latest branch, always. Support for versioned documentation is coming in the future.
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

;(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([
      'ApiClient',
      'model/AcceptConsentRequest',
      'model/AcceptLoginRequest',
      'model/AuthenticationSession',
      'model/CompletedRequest',
      'model/ConsentRequest',
      'model/ConsentRequestSession',
      'model/FlushInactiveOAuth2TokensRequest',
      'model/Handler',
      'model/HealthStatus',
      'model/InlineResponse401',
      'model/JoseWebKeySetRequest',
      'model/JsonWebKey',
      'model/JsonWebKeySet',
      'model/JsonWebKeySetGeneratorRequest',
      'model/KeyGenerator',
      'model/LoginRequest',
      'model/Manager',
      'model/OAuth2Client',
      'model/OAuth2TokenIntrospection',
      'model/OauthTokenResponse',
      'model/OpenIDConnectContext',
      'model/RawMessage',
      'model/RejectRequest',
      'model/SwaggerFlushInactiveAccessTokens',
      'model/SwaggerJsonWebKeyQuery',
      'model/SwaggerJwkCreateSet',
      'model/SwaggerJwkSetQuery',
      'model/SwaggerJwkUpdateSet',
      'model/SwaggerJwkUpdateSetKey',
      'model/SwaggerOAuthIntrospectionRequest',
      'model/SwaggerRevokeOAuth2TokenParameters',
      'model/UserinfoResponse',
      'model/Version',
      'model/WellKnown',
      'model/Writer',
      'api/HealthApi',
      'api/JsonWebKeyApi',
      'api/MetricsApi',
      'api/OAuth2Api',
      'api/VersionApi'
    ], factory)
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
      require('./ApiClient'),
      require('./model/AcceptConsentRequest'),
      require('./model/AcceptLoginRequest'),
      require('./model/AuthenticationSession'),
      require('./model/CompletedRequest'),
      require('./model/ConsentRequest'),
      require('./model/ConsentRequestSession'),
      require('./model/FlushInactiveOAuth2TokensRequest'),
      require('./model/Handler'),
      require('./model/HealthStatus'),
      require('./model/InlineResponse401'),
      require('./model/JoseWebKeySetRequest'),
      require('./model/JsonWebKey'),
      require('./model/JsonWebKeySet'),
      require('./model/JsonWebKeySetGeneratorRequest'),
      require('./model/KeyGenerator'),
      require('./model/LoginRequest'),
      require('./model/Manager'),
      require('./model/OAuth2Client'),
      require('./model/OAuth2TokenIntrospection'),
      require('./model/OauthTokenResponse'),
      require('./model/OpenIDConnectContext'),
      require('./model/RawMessage'),
      require('./model/RejectRequest'),
      require('./model/SwaggerFlushInactiveAccessTokens'),
      require('./model/SwaggerJsonWebKeyQuery'),
      require('./model/SwaggerJwkCreateSet'),
      require('./model/SwaggerJwkSetQuery'),
      require('./model/SwaggerJwkUpdateSet'),
      require('./model/SwaggerJwkUpdateSetKey'),
      require('./model/SwaggerOAuthIntrospectionRequest'),
      require('./model/SwaggerRevokeOAuth2TokenParameters'),
      require('./model/UserinfoResponse'),
      require('./model/Version'),
      require('./model/WellKnown'),
      require('./model/Writer'),
      require('./api/HealthApi'),
      require('./api/JsonWebKeyApi'),
      require('./api/MetricsApi'),
      require('./api/OAuth2Api'),
      require('./api/VersionApi')
    )
  }
})(function(
  ApiClient,
  AcceptConsentRequest,
  AcceptLoginRequest,
  AuthenticationSession,
  CompletedRequest,
  ConsentRequest,
  ConsentRequestSession,
  FlushInactiveOAuth2TokensRequest,
  Handler,
  HealthStatus,
  InlineResponse401,
  JoseWebKeySetRequest,
  JsonWebKey,
  JsonWebKeySet,
  JsonWebKeySetGeneratorRequest,
  KeyGenerator,
  LoginRequest,
  Manager,
  OAuth2Client,
  OAuth2TokenIntrospection,
  OauthTokenResponse,
  OpenIDConnectContext,
  RawMessage,
  RejectRequest,
  SwaggerFlushInactiveAccessTokens,
  SwaggerJsonWebKeyQuery,
  SwaggerJwkCreateSet,
  SwaggerJwkSetQuery,
  SwaggerJwkUpdateSet,
  SwaggerJwkUpdateSetKey,
  SwaggerOAuthIntrospectionRequest,
  SwaggerRevokeOAuth2TokenParameters,
  UserinfoResponse,
  Version,
  WellKnown,
  Writer,
  HealthApi,
  JsonWebKeyApi,
  MetricsApi,
  OAuth2Api,
  VersionApi
) {
  'use strict'

  /**
   * Welcome_to_the_ORY_Hydra_HTTP_API_documentation__You_will_find_documentation_for_all_HTTP_APIs_here__Keep_in_mind_that_this_document_reflects_the_latest_branch_always__Support_for_versioned_documentation_is_coming_in_the_future_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var OryHydraCloudNativeOAuth20AndOpenIdConnectServer = require('index'); // See note below*.
   * var xxxSvc = new OryHydraCloudNativeOAuth20AndOpenIdConnectServer.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new OryHydraCloudNativeOAuth20AndOpenIdConnectServer.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new OryHydraCloudNativeOAuth20AndOpenIdConnectServer.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new OryHydraCloudNativeOAuth20AndOpenIdConnectServer.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version Latest
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AcceptConsentRequest model constructor.
     * @property {module:model/AcceptConsentRequest}
     */
    AcceptConsentRequest: AcceptConsentRequest,
    /**
     * The AcceptLoginRequest model constructor.
     * @property {module:model/AcceptLoginRequest}
     */
    AcceptLoginRequest: AcceptLoginRequest,
    /**
     * The AuthenticationSession model constructor.
     * @property {module:model/AuthenticationSession}
     */
    AuthenticationSession: AuthenticationSession,
    /**
     * The CompletedRequest model constructor.
     * @property {module:model/CompletedRequest}
     */
    CompletedRequest: CompletedRequest,
    /**
     * The ConsentRequest model constructor.
     * @property {module:model/ConsentRequest}
     */
    ConsentRequest: ConsentRequest,
    /**
     * The ConsentRequestSession model constructor.
     * @property {module:model/ConsentRequestSession}
     */
    ConsentRequestSession: ConsentRequestSession,
    /**
     * The FlushInactiveOAuth2TokensRequest model constructor.
     * @property {module:model/FlushInactiveOAuth2TokensRequest}
     */
    FlushInactiveOAuth2TokensRequest: FlushInactiveOAuth2TokensRequest,
    /**
     * The Handler model constructor.
     * @property {module:model/Handler}
     */
    Handler: Handler,
    /**
     * The HealthStatus model constructor.
     * @property {module:model/HealthStatus}
     */
    HealthStatus: HealthStatus,
    /**
     * The InlineResponse401 model constructor.
     * @property {module:model/InlineResponse401}
     */
    InlineResponse401: InlineResponse401,
    /**
     * The JoseWebKeySetRequest model constructor.
     * @property {module:model/JoseWebKeySetRequest}
     */
    JoseWebKeySetRequest: JoseWebKeySetRequest,
    /**
     * The JsonWebKey model constructor.
     * @property {module:model/JsonWebKey}
     */
    JsonWebKey: JsonWebKey,
    /**
     * The JsonWebKeySet model constructor.
     * @property {module:model/JsonWebKeySet}
     */
    JsonWebKeySet: JsonWebKeySet,
    /**
     * The JsonWebKeySetGeneratorRequest model constructor.
     * @property {module:model/JsonWebKeySetGeneratorRequest}
     */
    JsonWebKeySetGeneratorRequest: JsonWebKeySetGeneratorRequest,
    /**
     * The KeyGenerator model constructor.
     * @property {module:model/KeyGenerator}
     */
    KeyGenerator: KeyGenerator,
    /**
     * The LoginRequest model constructor.
     * @property {module:model/LoginRequest}
     */
    LoginRequest: LoginRequest,
    /**
     * The Manager model constructor.
     * @property {module:model/Manager}
     */
    Manager: Manager,
    /**
     * The OAuth2Client model constructor.
     * @property {module:model/OAuth2Client}
     */
    OAuth2Client: OAuth2Client,
    /**
     * The OAuth2TokenIntrospection model constructor.
     * @property {module:model/OAuth2TokenIntrospection}
     */
    OAuth2TokenIntrospection: OAuth2TokenIntrospection,
    /**
     * The OauthTokenResponse model constructor.
     * @property {module:model/OauthTokenResponse}
     */
    OauthTokenResponse: OauthTokenResponse,
    /**
     * The OpenIDConnectContext model constructor.
     * @property {module:model/OpenIDConnectContext}
     */
    OpenIDConnectContext: OpenIDConnectContext,
    /**
     * The RawMessage model constructor.
     * @property {module:model/RawMessage}
     */
    RawMessage: RawMessage,
    /**
     * The RejectRequest model constructor.
     * @property {module:model/RejectRequest}
     */
    RejectRequest: RejectRequest,
    /**
     * The SwaggerFlushInactiveAccessTokens model constructor.
     * @property {module:model/SwaggerFlushInactiveAccessTokens}
     */
    SwaggerFlushInactiveAccessTokens: SwaggerFlushInactiveAccessTokens,
    /**
     * The SwaggerJsonWebKeyQuery model constructor.
     * @property {module:model/SwaggerJsonWebKeyQuery}
     */
    SwaggerJsonWebKeyQuery: SwaggerJsonWebKeyQuery,
    /**
     * The SwaggerJwkCreateSet model constructor.
     * @property {module:model/SwaggerJwkCreateSet}
     */
    SwaggerJwkCreateSet: SwaggerJwkCreateSet,
    /**
     * The SwaggerJwkSetQuery model constructor.
     * @property {module:model/SwaggerJwkSetQuery}
     */
    SwaggerJwkSetQuery: SwaggerJwkSetQuery,
    /**
     * The SwaggerJwkUpdateSet model constructor.
     * @property {module:model/SwaggerJwkUpdateSet}
     */
    SwaggerJwkUpdateSet: SwaggerJwkUpdateSet,
    /**
     * The SwaggerJwkUpdateSetKey model constructor.
     * @property {module:model/SwaggerJwkUpdateSetKey}
     */
    SwaggerJwkUpdateSetKey: SwaggerJwkUpdateSetKey,
    /**
     * The SwaggerOAuthIntrospectionRequest model constructor.
     * @property {module:model/SwaggerOAuthIntrospectionRequest}
     */
    SwaggerOAuthIntrospectionRequest: SwaggerOAuthIntrospectionRequest,
    /**
     * The SwaggerRevokeOAuth2TokenParameters model constructor.
     * @property {module:model/SwaggerRevokeOAuth2TokenParameters}
     */
    SwaggerRevokeOAuth2TokenParameters: SwaggerRevokeOAuth2TokenParameters,
    /**
     * The UserinfoResponse model constructor.
     * @property {module:model/UserinfoResponse}
     */
    UserinfoResponse: UserinfoResponse,
    /**
     * The Version model constructor.
     * @property {module:model/Version}
     */
    Version: Version,
    /**
     * The WellKnown model constructor.
     * @property {module:model/WellKnown}
     */
    WellKnown: WellKnown,
    /**
     * The Writer model constructor.
     * @property {module:model/Writer}
     */
    Writer: Writer,
    /**
     * The HealthApi service constructor.
     * @property {module:api/HealthApi}
     */
    HealthApi: HealthApi,
    /**
     * The JsonWebKeyApi service constructor.
     * @property {module:api/JsonWebKeyApi}
     */
    JsonWebKeyApi: JsonWebKeyApi,
    /**
     * The MetricsApi service constructor.
     * @property {module:api/MetricsApi}
     */
    MetricsApi: MetricsApi,
    /**
     * The OAuth2Api service constructor.
     * @property {module:api/OAuth2Api}
     */
    OAuth2Api: OAuth2Api,
    /**
     * The VersionApi service constructor.
     * @property {module:api/VersionApi}
     */
    VersionApi: VersionApi
  }

  return exports
})
